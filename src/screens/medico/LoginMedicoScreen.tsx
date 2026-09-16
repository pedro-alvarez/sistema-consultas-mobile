import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { styles } from "../../styles/loginMedico.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { buscarMedicoPorCrm } from "../../services/medicoService";
import { isNetworkError } from "../../services/api";

type Props = {
   navigation: NativeStackNavigationProp<RootStackParamList, "LoginMedico">;
};

export default function LoginMedicoScreen({ navigation }: Props) {
   const [crm, setCrm] = useState("");
   const [carregando, setCarregando] = useState(false);
   const [erro, setErro] = useState("");

   async function handleEntrar() {
      const crmLimpo = crm.trim().toUpperCase();
      if (!crmLimpo) {
         setErro("Digite seu CRM.");
         return;
      }
      try {
         setCarregando(true);
         setErro("");
         const medico = await buscarMedicoPorCrm(crmLimpo);
         if (medico.valorConsulta == null) {
            navigation.navigate("PerfilMedico", {
               medicoId: medico.id,
               medicoNome: medico.nome,
            });
         } else {
            navigation.navigate("ConsultasMedico", {
               medicoId: medico.id,
               medicoNome: medico.nome,
            });
         }
      } catch (error) {
         if (isNetworkError(error)) {
            setErro(
               "Servidor indisponivel. Verifique se o backend esta rodando e tente novamente."
            );
         } else {
            setErro("CRM nao encontrado. Verifique e tente novamente.");
         }
      } finally {
         setCarregando(false);
      }
   }

   return (
      <KeyboardAvoidingView
         style={styles.container}
         behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
         <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
         >
            <Text style={styles.titulo}>Acesso Medico</Text>
            <Text style={styles.subtitulo}>
               Digite seu CRM para acessar suas consultas
            </Text>

            <View style={styles.formulario}>
               <Text style={styles.label}>CRM</Text>
               <TextInput
                  style={styles.input}
                  placeholder="Digite seu CRM"
                  keyboardType="numeric"
                  value={crm}
                  onChangeText={(text) => {
                     setCrm(text);
                     setErro("");
                  }}
               />

               {erro !== "" && <Text style={styles.erroTexto}>{erro}</Text>}

               <TouchableOpacity
                  style={[styles.botao, carregando && styles.botaoDesabilitado]}
                  onPress={handleEntrar}
                  disabled={carregando}
               >
                  {carregando ? (
                     <ActivityIndicator color="#fff" />
                  ) : (
                     <Text style={styles.botaoTexto}>Entrar</Text>
                  )}
               </TouchableOpacity>

               <View style={styles.separador}>
                  <View style={styles.linha} />
                  <Text style={styles.separadorTexto}>ou</Text>
                  <View style={styles.linha} />
               </View>

               <TouchableOpacity
                  style={styles.botaoSecundario}
                  onPress={() => navigation.navigate("CadastroMedico")}
               >
                  <Text style={styles.botaoSecundarioTexto}>
                     Nao tenho cadastro - Criar conta
                  </Text>
               </TouchableOpacity>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
}

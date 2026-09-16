/**
 * Estilos da tela principal (App.tsx)
 *
 * Separados da lógica para facilitar manutenção e reuso.
 * O App.tsx cuida apenas de estado, JSX e chamadas à API.
 *
 * Regra: este arquivo só importa StyleSheet - nada de React, nada de lógica.
 */
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#79059C" },
  scrollContent: { padding: 20, paddingTop: 60, paddingBottom: 40 },
  header: { alignItems: "center", marginBottom: 24 },
  titulo: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 8 },
  subtitulo: { fontSize: 18, color: "#fff", opacity: 0.9 },
  secaoTitulo: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 12 },
  secaoHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 24, marginBottom: 12 },
  secaoTituloConsultas: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 16, marginBottom: 12 },
  cardNome: { fontSize: 16, fontWeight: "bold", color: "#333", marginBottom: 4 },
  cardInfo: { fontSize: 14, color: "#666", marginBottom: 2 },
  cardObservacoes: { fontSize: 13, color: "#888", fontStyle: "italic", marginTop: 4 },
  badge: { alignSelf: "flex-start", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 3, marginTop: 8 },
  badgeAtivo: { backgroundColor: "#d4edda" },
  badgeInativo: { backgroundColor: "#f8d7da" },
  badgeTexto: { fontSize: 12, fontWeight: "bold", color: "#333" },
  statusBadge: { alignSelf: "flex-start", borderRadius: 6, paddingHorizontal: 10, paddingVertical: 3, marginBottom: 8 },
  statusTexto: { fontSize: 11, fontWeight: "bold" },
  acoesContainer: { flexDirection: "row", gap: 8, marginTop: 10 },
  botaoAcao: { flex: 1, borderRadius: 8, padding: 10, alignItems: "center" },
  botaoConfirmar: { backgroundColor: "#28a745" },
  botaoCancelarAcao: { backgroundColor: "#dc3545" },
  botaoAcaoTexto: { color: "#fff", fontWeight: "bold", fontSize: 13 },
  botaoAgendar: { backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 8 },
  botaoAgendarTexto: { color: "#79059C", fontWeight: "bold", fontSize: 14 },
  erroContainer: { marginTop: 24, padding: 16, backgroundColor: "rgba(255,80,80,0.2)", borderRadius: 12, borderWidth: 1, borderColor: "rgba(255,80,80,0.5)" },
  erroTexto: { fontSize: 14, color: "#fff", textAlign: "center", lineHeight: 22 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "flex-end" },
  modalContainer: { backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, maxHeight: "85%" },
  modalTitulo: { fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 20, textAlign: "center" },
  inputLabel: { fontSize: 14, fontWeight: "600", color: "#555", marginBottom: 6 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 8, padding: 12, fontSize: 15, marginBottom: 16, color: "#333" },
  inputMultilinha: { height: 80, textAlignVertical: "top" },
  botaoSalvar: { backgroundColor: "#79059C", borderRadius: 10, padding: 16, alignItems: "center", marginBottom: 12 },
  botaoDesabilitado: { opacity: 0.6 },
  botaoSalvarTexto: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  botaoCancelarModal: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 14, alignItems: "center", marginBottom: 8 },
  botaoCancelarModalTexto: { color: "#666", fontSize: 15 },
});

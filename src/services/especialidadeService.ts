import api from "./api";
import { Especialidade } from "../types/especialidade";

export async function listarEspecialidades(): Promise<Especialidade[]> {
  const response = await api.get<Especialidade[]>("/especialidades");
  return response.data;
}

export async function buscarEspecialidadePorId(id: number): Promise<Especialidade> {
  const response = await api.get<Especialidade>(`/especialidades/${id}`);
  return response.data;
}

/**
 * Omit<Especialidade, "id"> → mesmo tipo de Especialidade, mas SEM o campo id.
 * O id é gerado pelo backend ao salvar no banco, então o frontend não envia.
 */
export async function criarEspecialidade(
  especialidade: Omit<Especialidade, "id">
): Promise<Especialidade> {
  const response = await api.post<Especialidade>("/especialidades", especialidade);
  return response.data;
}

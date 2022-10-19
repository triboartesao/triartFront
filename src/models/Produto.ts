import Categoria from "./Categoria";
import User from "./User";

interface Produto {
id: number;
nome: string;
descricao: string;
foto: string
quantidade: number;
preco: number;
categoria?: Categoria | null
usuario?: User | null

}
export default Produto
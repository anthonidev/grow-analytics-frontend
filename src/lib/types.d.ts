interface UserAccount {
  usuario: string;
  nombre: string;
  correo: string;
  id: number;
  tipo_usuario: string;
  apell_paterno: string;
  apell_materno: string;
}

interface Pagination {
  count: number;
  current_page: number;
  total_pages: number;
}
interface UserAccountPagination extends Pagination {
  count: number;
  results: UserAccount[];
}

interface EditUser {
  correo: string;
  usuario: string;
  nombre: string;
  apell_paterno: string;
  apell_materno: string;
}
interface Signup {
  correo: string;
  contrasena: string;
  usuario: string;
  nombre: string;
  apell_paterno: string;
  apell_materno: string;
  tipo_usuario: string;
}

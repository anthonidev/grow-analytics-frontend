interface UserAccount {
  usuario: number;
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

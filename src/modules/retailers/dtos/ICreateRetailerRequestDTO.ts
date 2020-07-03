export default interface ICreateRetailerRequestDTO {
 name: string;
 email: string;
 password: string;
 cnpj: number;
 address: string;
 city: string;
 state: string;
 image?: string;
}

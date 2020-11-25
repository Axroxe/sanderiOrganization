export interface person {
  id?: number;
  name: string;
  lastName: string;
  userName: string;
  identificationNumber: string;
  identificationType: string;
  direction: string;
  mobile: string;
  photo: string;
  state: string;
  token?: string;
  password: string;
  email: string;
  departmentName?: string;
  cityName?: string;
  verify_password?: string;
  terms_condition?: string;
  getToken?: boolean;
  created_at?: string;
  updated_at?: string;
  lat?: any;
  lng?: any;
}

import axios from '.';
import { ICompany } from '../interfaces/company';

const getCompanies = async () => {
  const response = await axios.get<ICompany[]>('/companies');
  return response.data;
};

const CompanyService = { getCompanies };

export default CompanyService;

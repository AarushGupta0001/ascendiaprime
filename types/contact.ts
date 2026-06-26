export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
};

export type ContactApiResponse = {
  success: boolean;
  message: string;
};

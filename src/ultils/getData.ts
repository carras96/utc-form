import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { IServiceAccountAuth } from '../Providers/AppProvider';

export const getData = async (
  serviceAccountAuth: IServiceAccountAuth,
  sheetId: string,
) => {
  const doc = new GoogleSpreadsheet(sheetId, new JWT(serviceAccountAuth));
  await doc.loadInfo();
  console.log(doc);
  return doc;
};

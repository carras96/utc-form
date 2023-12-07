import { JWT } from 'google-auth-library';
import React, { ReactNode, createContext } from 'react';

export interface IAppContextData {
  serviceAccountAuth: any;
}

const initialValueAppContext: IAppContextData = {
    serviceAccountAuth: '',
};

export const AppContext = createContext<IAppContextData>(initialValueAppContext);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const serviceAccountAuth = new JWT({
    email: 'ggsheet@sheettest-407314.iam.gserviceaccount.com',
    key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDW2rpARJA151jB\nASXADxWiXIeDBq93YT8EWeyKX7Pdek3obsYUPJLU33I+n7DGzuEs00J/eBlnYfqG\n8zXC/UVjpCJDHullLjmhqU2w2pn+BEfXC/vIvZxQ0htcsp30vWiHegTVXIG6HIe+\nY57/XTv4+O5QYXwAd4E7xb7Q8ezE3VpEBQfHq1EQXmdIxtnJujXLXcBLKb/yJTm1\nGBzcGfStgUT6U8vknfcv0WPrL1WINb2wiN/jyL1WE6yEvgftru0jyQbHB6egFLQe\njuMoZQcVMxAd3mrd2a9HTkI1N3I21bfe4SeO+XR0/mcvlB5jMy1Y7xnkuctqUuVo\nIdFT6Q5BAgMBAAECggEAB1xsZSdJiY8+Nd6Zhyr9IsLozE8TqT4RBU/PZYOXNfoA\nEVE6QsHl20U3NM4OexaQwGhnLtbT3VGOCRxBYJzXc8J71LDfw4eskc1VzBQGkp1d\nmLs1tSWfOrr4FQT0RHOje9YXtEz8ZNP1Z/XMd2ifqrgHR4Rk1d9CSOSi1PsfkYmz\n1q103zOHE3SYQQaAv7Vkm2VM1JdiMIcUtmCjsay9p/6idFJc9/hrxYat09W/VGoW\nrFI+MSJOTwtiiJrXsTlPZ7+M24MM/5bDX9fHOpgTBnrBXXZnobYCSn78qsqiSGxv\nOyJVoOp/l3I870FdlvkmYo5/PDIyTaU3Y2ULH+EFwQKBgQDq4A24/6htlK+qCa/Z\nD+v56ji9pggaMVjkFRIV+nLkTkNf/kERdLTmqIZd7o8Avlwka7I7SNd/EQxz82px\nxDswl23XOZSf2d/IcX044hLxob/Um8GzcGWkVBTuAi0IzBVp+eqts+XM5onf3OIb\njDmwSYzmqPdQGQaSRRrFxlxUnwKBgQDqLbMaQn44bPlp6EbWqx6dsJXIW66OWjFJ\nJTCo+VFmyXhLaZXs8ghCBEb+GWgHAybGwHo7oZMOE+KOdad3mTlKG/sxVOiiiFy3\nPIUAWdvHyDnJeBrrZ6Q7ieGOrQojI8Clz4BsG4Sy42CSGR83ZlH18tsAwpbfD2Bs\n6Q8eczvRHwKBgQCUcJPbpqAA2WaH1WVwjrJ5mQDRQvx96VAfnf13LHiuN5Q3N85R\nxOuLl1iMRvfT5XsAfZwAAdJH+TNgmKdeTUGHPTzrN/XpbN4UpT0Z1S9ZzPsa2HF8\nAX4LdCRiI7fohmrGNm+N5lNGwzDB7axs8puHAYTuRj0/PwG7Mbdw5SN3SwKBgEju\n4LgN+3ehYPB+Ggnjk45zH8Md4riNGIp6XbRSqeqEVsXN5Za9Lps4789VpFOCxMHj\n0m3d/YnF4aqStAyImRIestYDZsywAYhD/fxFADExh+XaVS/5wGmWoLwp4l1dVjON\n86Y3z9VTAZGe51z+rgoWj+Sltg1Uoahp0X6fTwLrAoGBAK/2RV9h1ouQKIdjEix0\npqveVEvMAi44qx5CrdOyYD80t2oX0O1bgmF64yFIEcixwtc7Rw4jsQujXLI7XfHI\nW5tdBYneCNpyfIXvHDfEUhKPtDpnolNmNaD+LLgeVQCSVP37ThxsylUUrCY+QZa+\nwKiSEtROsphNoATB2KBo2byQ\n-----END PRIVATE KEY-----\n',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return <AppContext.Provider value={{ serviceAccountAuth }}>{children}</AppContext.Provider>;
};

export default AppProvider;

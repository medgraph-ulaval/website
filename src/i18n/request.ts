import {cookies} from "next/headers";
import {getRequestConfig} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';
 
export default getRequestConfig(async () => {
  const store = await cookies()
  const locale = store.get("locale")?.value ?? "en";

  const messages = (await import(`../../messages/${locale}.json`)) as {
    default: AbstractIntlMessages;
  };
 
  return {
    locale,
    messages: messages.default,
  };
});
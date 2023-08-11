import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

import fs from "fs"
import path from 'path'
const baseDirectory = path.join(process.cwd(), 'app/i18n');

// https://locize.com/blog/next-13-app-dir-i18n/


const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    // not working ...
    // .use(resourcesToBackend(async (language: string, namespace: string) => {
    //   let path = `./locales/${language}/${namespace}.json`
    //   // return await import(path)
    //   return import(`./locales/${language}/${namespace}.json`).then((module) => module.default)
    // }))
    .use(resourcesToBackend(async (language: string, namespace: string) => {
      const localpath = `./locales/${language}/${namespace}.json`
      const fullPath = path.join(baseDirectory, localpath)
      const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      return data
    }))
    .init(getOptions(lng, ns))
  return i18nInstance
}


export async function useTranslation(lng: string, ns: string = "", options: any = {}) {
  "use server";
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}
This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

##   [Play Video](https://drive.google.com/file/d/1d5WZfYHmEdQDEfpkl0GxiPPRf987WxdD/view?usp=drive_link)     

https://drive.google.com/file/d/1d5WZfYHmEdQDEfpkl0GxiPPRf987WxdD/view?usp=drive_link

##   Screenshorts

![29 06 2024_03 29 11_REC](https://github.com/Vicky8180/Linkedin_Extension_AI_Reply/assets/76256436/070961d9-7355-4b96-984d-00ba357f9761)

![29 06 2024_03 30 51_REC](https://github.com/Vicky8180/Linkedin_Extension_AI_Reply/assets/76256436/d37764e1-0ecf-4157-9314-be379a75bc60)

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores

The easiest way to deploy your Plasmo extension is to use the built-in [bpp](https://bpp.browser.market) GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow [this setup instruction](https://docs.plasmo.com/framework/workflows/submit) and you should be on your way for automated submission!

### Deploy React static web site

Original article: https://medium.com/google-cloud/how-to-deploy-a-static-react-site-to-google-cloud-platform-55ff0bd0f509

Build the application.
```
npm run build
```
Create a bucket in GCP. If bucket exists, replace files of folder build.

Create app.yaml and upload this file to the bucket as well.
```
runtime: python27
api_version: 1
threadsafe: true

handlers:
- url: /
  static_files: build/index.html
  upload: build/index.html

- url: /
  static_dir: build
```

Activate Google Cloud Shell and execute next commands:

Create a folder 'trashbot-react'. Skip this if it already exists.
```
mkdir trashbot-react
```
Sync the files from cloud storage bucket (named as 'trashbot-react-build') to 'trashbot-react' folder.
```
gsutil rsync -r gs://trashbot-react-build ./trashbot-react/
```
Change to Directory
```
cd trashbot-react
```
Deploy web site. 
You can specify the version of your app with the flag '--version VERSION-NAME'.
```
gcloud app deploy --version 1
```
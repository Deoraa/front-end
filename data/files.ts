export interface FilesProps {
   id?: number
   ownerId?: number
   type?: string
   file?: File
   url?: string
   attachementName?: string
 }
 
 export const files = [
   {
     id: 1,
     ownerId: 1,
     fileName: 'layout.png',
     attachementName: 'lkasjdklasl2909df.png',
   },
 
   {
     id: 2,
     ownerId: 1,
     fileName: 'erros.png',
     attachementName: 'lkasjdklasl2909df.png',
   },
 
   {
     id: 3,
     ownerId: 1,
     fileName: 'dados.pdf',
     attachementName: 'lkasjdklasl2909df.png',
   },
 
   {
     id: 4,
     ownerId: 2,
     fileName: 'análise técnica.pdf',
     attachementName: 'lkasjdklasl2909df.png',
   },
 
   {
     id: 5,
     ownerId: 3,
     fileName: 'análise técnica.pdf',
     attachementName: 'lkasjdklasl2909df.png',
   },
 
 ]
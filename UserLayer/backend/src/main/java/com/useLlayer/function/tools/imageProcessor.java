package com.useLlayer.function.tools;

import java.io.*;
import java.util.Arrays;
import java.util.Base64;

public class imageProcessor {

    String base64Image;

    public imageProcessor() {
    }

    public imageProcessor(String base64Image) {
        this.base64Image = base64Image;
    }

    public String getImage() {

        String photoType = base64Image.split(",")[0].split("/")[1].split(";")[0];
        byte[] photoBytes = Base64.getDecoder().decode(base64Image.split(",")[1]);
        String uuid = java.util.UUID.randomUUID().toString();

        File picfilepath = new File("./UserLayer/userInfo/profilePhotos/" + uuid + "." + photoType);
        File filepath = new File("./UserLayer/userInfo/profilePhotos");

        if (!filepath.exists()) {
            filepath.mkdirs();
        }
        try {
            FileOutputStream out = new FileOutputStream(picfilepath);
            out.write(photoBytes);
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }


        return uuid + "." + photoType;

    }

    //from a file name, generate a base64 string
    public String getBase64(String filename){
            String path = "./UserLayer/userInfo/profilePhotos/"+filename;

            byte[] data = null;
            try
            {
                InputStream in = new FileInputStream(path);
                data = new byte[in.available()];
                in.read(data);
                in.close();
            }
            catch (IOException e)
            {
                e.printStackTrace();
            }
//        System.out.println(Arrays.toString(Base64.getEncoder().encode(data)));
            
            
            //return a base64 string without data:image/jpeg;base64, in front of the string
            return Base64.getEncoder().encodeToString(data);
    

    }
    
    
    
}

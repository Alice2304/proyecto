import React from "react";

import { ConfigProvider} from "antd";
import ptB from './es_ES'

// don't forget to import moment locale



const Configure =({children})=>{
    return(

        <ConfigProvider
          locale={ptB}
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#0056b8',

              // Alias Token
              colorBgContainer: '#f6ffed',
            },
          }}
        >
          {children} 
        </ConfigProvider>

    )
}


export default Configure
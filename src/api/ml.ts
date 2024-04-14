import httpml from '../api/requestml'


export const sendChatMes=(data:string)=>{
    return httpml.post("/chat",{text:data})
}


/**链接知识库 */
export const lianjieku=(kname?:string)=>{
    return httpml.post("/init_retrival",{kname})
}

/**依据知识库回答问题 */
export const replyQe=(text:string)=>{
    return httpml.post("/chat_with_retrival",{text,k:10})
}


/**上传资源 */
// export const uploadDocument=(file:File,name:string)=>{
//     return httpml.post("/add_document",{text,k:10})
// }

/**个性化出题 */
export const getqe=(text:string)=>{
    return httpml.post("/get_qa",{text})
}


/**清楚历史 */
export const clearhis=()=>{
    return httpml.post("/clear_history")
}
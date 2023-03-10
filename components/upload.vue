<template>
    <div>
        <input type="file" @change="upload">
    </div>
</template>
<script >
import {getCurrentInstance} from 'vue'
export default {
    setup(props) {
        const { proxy } = getCurrentInstance();

        const upload = async (e) => {
            console.log(e)
            const file = e.target.files[0]
            if (!file) return

            // 文件分片
            let size = 1024 * 50; //50KB 50KB Section size
            let fileChunks = [];
            let index = 0;        //Section num
            for (let cur = 0; cur < file.size; cur += size) {
                fileChunks.push({
                    hash: index++,
                    chunk: file.slice(cur, cur + size),
                });
            }

            // 上传分片
            const uploadList = fileChunks.map((item, index) => {
                let formData = new FormData();
                formData.append("filename", file.name);
                formData.append("hash", item.hash);
                formData.append("chunk", item.chunk);
                return proxy.$axios({
                    method: "post",
                    url: "/upload",
                    data: formData,
                });
            });


            await Promise.all(uploadList);

            // 所有分片上传完成，通知服务器合并分片
            await proxy.$axios({
                method: "get",
                url: "/merge",
                params: {
                    filename: file.name,
                },
            });
        }

        return {
            upload
        }
    }
}


</script>
<template>
    <div>
        <button @click="getData">下载</button>
    </div>
</template>
<script >
import { getCurrentInstance } from 'vue'
export default {
    setup(props) {
        const { proxy } = getCurrentInstance();

        const linkDownload = (blob, fileName) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            link.remove();
            URL.revokeObjectURL(link.href);
        }

        const getData = async () => {
            const res = await proxy.$axios({
                method: 'get',
                url: '/download',
                responseType: 'blob'
            })
            linkDownload(res.data,'123.pdf')
            console.log(res.headers)
        }


        return {
            getData
        }
    }
}


</script>
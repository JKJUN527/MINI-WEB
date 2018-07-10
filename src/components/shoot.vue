<template>
    <div class="shoot">
        <div class="video"></div>
        <div class="footer">
            <div class="uploadFile">
                <input type="file" id="upload">
                <label for="upload"><text>上传</text></label>
            </div>
            <div class="start-shoot"></div>
        </div>
        <img src="../asset/img/按钮.png" alt="">
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .shoot {
        flex-grow: 1;
        position: relative;
    }
    .footer {
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 100px
    }
    .uploadFile {
        position: relative;
    }

    .uploadFile label,
    .uploadFile input {
        position: absolute;
        width: 100px;
    }

    .uploadFile input {
        opacity: 0;
    }

    .start-shoot {
        width: 200px;
        height: 200px;
        background-size: contain;
        background-image: url('../asset/img/按钮.png');
        margin: 0 auto
    }
</style>

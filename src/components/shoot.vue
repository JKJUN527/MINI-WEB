<template>
    <div class="shoot">
        <div class="video"></div>
        <div class="footer">
            <div class="shoot-controller"></div>
            <div class="btn-group">
                <div class="btn uploadFile">
                    <input type="file" id="upload">
                    <label for="upload"></label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick () {
            
        }
    }
}
</script>
<style scoped>
    .shoot {
        flex-grow: 1;
        position: relative;
    }

    .video {
        width: 100%;
        height: 800px;
        background-color: black;
    }

    .footer {
        width: 100%;
        position: absolute;
        bottom: 0px
    }

    .shoot-controller {
        margin: 0 auto;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: black
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

    .btn-group {
        flex-direction: row;
        justify-content: center;
    }

    .btn {
        margin: 30px 100px;
        width: 40px;
        height: 40px;
        background-color: black;
    }
</style>

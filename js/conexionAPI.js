async function listarVideos() {
    const conexion = await fetch("http://localhost:3000/videos")

    const conexionConvertida = conexion.json()
    //console.log(conexionConvertida);
    return conexionConvertida
}

export const conexionAPI = {
    listarVideos
}
//listarVideos();

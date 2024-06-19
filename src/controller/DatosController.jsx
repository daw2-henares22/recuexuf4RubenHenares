const DatosController ={
    
    ///////POST
    controladorNuevaHistoria: async (dataHistoria) => {
        try {            
            const response = await fetch('https://json-server-vercel-main-phi.vercel.app/historias', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Thunder Client (https://www.thunderclient.com)'
                },
                
                body: JSON.stringify(dataHistoria)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const nuevaHistoria = await response.json(); 
            console.log('Historia creada exitosamente:', nuevaHistoria);
        } catch (error) {
            console.error('Error en la creación de la historia:', error);
        }
    },

    ///////PUT
    controladorEditarHistoria: async (dataHistoria) => {
        console.log('Actualizar historia:', dataHistoria);

        if (dataHistoria != null) {
            try {
                /*const response = await fetch(`http://localhost:3000/historias/${dataHistoria.id}`, {*/
                const response = await fetch(`https://json-server-vercel-main-phi.vercel.app/historias/${dataHistoria.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataHistoria),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const historiaActualizada = await response.json();
                //setHistorias(prevHistorias => prevHistorias.map(h => h.id === dataHistoria.id ? historiaActualizada : h));

                console.log('Historia actualizada exitosamente:', historiaActualizada);
            } catch (error) {
                console.error('Error en la actualización de la historia:', error);
            }
        } else {
            console.error('dataHistoria es null o undefined');
        }
    },


}
export default DatosController
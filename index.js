document.addEventListener('DOMContentLoaded', function () {});
            const chave = {
                'e': 'enter',
                'i': 'imes',
                'a': 'ai',
                'o': 'ober',
                'u': 'ufat'
            };
            
            function criptografar(texto) {
                return texto
                .split('')
                .map(letra => {
                    if (chave[letra]) {
                        return chave[letra];
                    }
                    return letra;
                })
                .join('');
            }
            
            function descriptografar(textoCriptografado) {
                let mensagemCriptografada = textoCriptografado

                for (const [pedaco, key] of Object.entries(chave)) { 
                    mensagemCriptografada = mensagemCriptografada.replaceAll(key, pedaco);
                }
                
                return mensagemCriptografada
            }
            
            function processarTexto() {
                const inputText = document.getElementById('inputText').value;
                const option = document.getElementById('option').value;
                let outputText = '';
                
                if (option === 'criptografar') {
                    outputText = criptografar(inputText);
                } else {
                    outputText = descriptografar(inputText);
                }
                
                document.getElementById('outputText').value = outputText;
            }
            
            function copiarTexto() {
                const outputText = document.getElementById('outputText');
                outputText.select();
                document.execCommand('copy');
                alert('Texto copiado para a área de transferência!');
            }
            
            
            
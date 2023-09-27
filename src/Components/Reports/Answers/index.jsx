import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const AnswersPDF = {
    renderHelloWorld: ({ nome, dados }) => {
        console.log("recebdo aqui em Answers", nome);

        console.log("recendoo aqui em Answers", dados);

        const reportTitle = [
            {
                text: 'Resultado das Questões e Atividades Propostas',
                fontSize: 20,
                bold: true,
                alignment: 'center',
                margin: [15, 20, 20, 45], // left, top, right, bottom
            },
            
        ];

        const reportDetails = [{text: `Nome: ${nome}`, fontSize: 15, margin: [45, 50, 45, 50], bold: true}];

        dados.forEach(item => {
            const { category, activities, result } = item;

            const orderedList = activities.map(activity => `Item: ${activity}`);

            const paragraph = [
                {
                    text: `Categoria: ${category}`, fontSize: 15, margin: [45, 10, 45, 8], bold: true,
                },
                {
                    table: {
                        widths: ['auto', '*'], // Largura automática para a primeira célula, o resto para a segunda
                        body: [
                            [
                                {
                                    text: 'Atividades:',
                                    style: 'header',
                                    fontSize: 15,
                                    margin: [45, 10, 0, 8], // left, top, right, bottom
                                    bold: true,
                                },
                                {
                                    text: `${result}`,
                                    fontSize: 15,
                                    margin: [0, 10, 45, 8]
                                },
                            ],
                        ],
                    },
                    layout: 'noBorders', // Remove as bordas da tabela, se desejar
                },
                {
                    text: 'Respostas:',
                    style: 'header',
                    fontSize: 15, margin: [45, 10, 45, 8], bold: true,
                },

                {
                    ol: orderedList,
                    fontSize: 13,
                    margin: [45, 10, 10, 8],
                },
            ];

            reportDetails.push(paragraph);
        });






        function Rodape(currentPage, pageCount) {
            return [
                {
                    text: currentPage + '/' + pageCount,
                    alignment: 'right',
                    fontSize: 9,
                    margin: [0, 10, 20, 0],
                },
            ];
        }

            const docDefinitions = {
                pageSize: 'A4',
                pageMargins: [15, 50, 15, 40],
                header: [reportTitle],
                content: reportDetails,
                footer: Rodape,
            };


        const pdfDoc = pdfMake.createPdf(docDefinitions);
                pdfDoc.download(nome + '.pdf');


    },


};

export default AnswersPDF;



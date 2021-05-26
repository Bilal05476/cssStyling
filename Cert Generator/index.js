const generatePDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;
  const exBytes = await fetch("./Certificate.pdf").then((res) =>
    res.arrayBuffer()
  );

  const PdfDoc = await PDFDocument.load(exBytes);
  const pages = PdfDoc.getPages();
  const firstPg = pages[0];

  firstPg.drawText(name, {
    x: 279,
    y: 312,
    size: 40,
    color: rgb(0.2, 0.4, 0.7),
  });

  const uri = await PdfDoc.saveAsBase64({ dataUri: true });
  document.querySelector("#certificate").src = uri;
};

generatePDF(prompt("Enter your Name"));

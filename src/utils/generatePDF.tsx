import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = (target: string) => {
  const targetElement = document.getElementById(target);

  if (targetElement?.innerHTML) {
    html2canvas(targetElement, {
      useCORS: false,
    }).then((canvas) => {
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth(); // Width of the PDF document (in mm)
      const pdfHeight = 150; // Height of the PDF document (in mm)

      const scaleFactor = pdfWidth / canvas.width; // Scale factor to fit the image width to the PDF width
      const imgWidth = pdfWidth; // Set the image width to match the PDF width
      const imgHeight = canvas.height * scaleFactor; // Calculate the image height based on the aspect ratio

      const yPos = (pdfHeight - imgHeight) / 2; // Calculate Y position to center the image vertically
      const xPos = 0; // Align the image to the left

      // Add the image to the PDF
      pdf.addImage(canvas, "PNG", xPos, yPos, imgWidth, imgHeight);

      // Save the PDF
      pdf.save("chart-visualization.pdf");
    });
  } else {
    console.error(`Element with ID '${target}' not found.`);
  }
};

import { Button } from 'antd';
import React, { useRef } from 'react';
import { View, Text } from 'react-native'; // You may need to adjust this import based on your setup
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function ApprovePermitView({ route }) {
  const { id } = route.params;
  const contentRef = useRef(); // Reference to the content you want to print

  const handleDownload = async () => {
    try {
      const element = contentRef.current; // Get the DOM element to convert to PDF
      const canvas = await html2canvas(element); // Capture the content as canvas
      const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data
      const pdf = new jsPDF();
      const imgWidth = 190; // Define the width for the image in PDF
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`permit_${id}.pdf`); // Save the PDF file
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View ref={contentRef}>
      <Text>Permit ID: {id}</Text>
      <Button onClick={handleDownload}>Download</Button>
    </View>
  );
}

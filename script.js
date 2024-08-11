function generateCertificate() {
    const clinicName = document.getElementById('clinicName').value;
    const clinicAddress = document.getElementById('clinicAddress').value;
    const patientName = document.getElementById('patientName').value;
    const disease = document.getElementById('disease').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const doctorName = document.getElementById('doctorName').value;
    const doctorQualification = document.getElementById('doctorQualification').value;

    const certificateContent = `
    <div class="certificate-border">
        <h2>${clinicName}</h2>
        <p>${clinicAddress}</p>
        <br><br>
        <h3>Medical Certificate</h3>
        <p>This is to certify that <strong>Mr./Ms. ${patientName}</strong> was under my care from ${startDate} to ${endDate} due to <strong>${disease}</strong>.</p>
        <p>During this period, Mr./Ms. ${patientName} was advised to take complete bed rest and has since recovered sufficiently.</p>
        <p>Mr./Ms. ${patientName} is now fit to return to normal activities.</p>
        <br>
        <p><strong>${doctorName}</strong></p>
        <p>${doctorQualification}</p>
        <p>${clinicName}</p>
        <br>
        <p>Date: ${new Date().toLocaleDateString()}</p>
        <p style="font-size: 12px;">This is a computer-generated document, no signature is required.</p>
    </div>`;

    const certificateWindow = window.open('', '_blank');
    certificateWindow.document.write(`
    <html>
    <head>
        <title>Medical Certificate</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 50px;
            }
            .certificate-border {
                border: 2px solid #333;
                padding: 30px;
                margin: auto;
                width: 60%;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            }
            .small-text {
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        ${certificateContent}
        <button onclick="window.print()">Print Certificate</button>
    </body>
    </html>
    `);
    certificateWindow.document.close();
}

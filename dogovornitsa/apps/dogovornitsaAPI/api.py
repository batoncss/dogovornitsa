from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from PyPDF2 import PdfReader, PdfWriter
from django.http import FileResponse
import io

class GeneratingPDF(APIView):
    def post(self, request):
        try:
            reader = PdfReader("static/pdf/agreementCar.pdf")
            writer = PdfWriter()
            fields = {
                'city': request.data['city'],
                'date': request.data['date'],
                'buyerName1': request.data['buyerName1'],
                'buyerName2': request.data['buyerName2'],
                'buyerName3': request.data['buyerName3'],
                'buyerName4': request.data['buyerName4'],
                'sellerName1': request.data['sellerName1'],
                'sellerName2': request.data['sellerName2'],
                'sellerName3': request.data['sellerName3'],
                'sellerName4': request.data['sellerName4'],
                'carModel': request.data['carModel'],
                'carVIN': request.data['carVIN'],
                'carType': request.data['carType'],
                'carReleaseYear': request.data['carReleaseYear'],
                'carMileage': request.data['carMileage'],
                'carPower': request.data['carPower'],
                'engineVolume': request.data['engineVolume'],
                'carColour': request.data['carColour'],
                'engineModel': request.data['engineModel'],
                'engineNumber': request.data['engineNumber'],
                'frameNumber': request.data['frameNumber'],
                'bodyNumber': request.data['bodyNumber'],
                'documentNumber': request.data['documentNumber'],
                'documentCreator': request.data['documentCreator'],
                'carStateNumber': request.data['carStateNumber'],
                'CertificateRegistrationSeries': request.data['CertificateRegistrationSeries'],
                'CertificateRegistrationNumber': request.data['CertificateRegistrationNumber'],
                'CertificateRegistrationCreator': request.data['CertificateRegistrationCreator'],
                'CertificateRegistrationDay': request.data['CertificateRegistrationDay'],
                'CertificateRegistrationMonth': request.data['CertificateRegistrationMonth'],
                'CertificateRegistrationYear': request.data['CertificateRegistrationYear'],
                'carCost': request.data['carCost'],
                'carCostDecoding': request.data['carCostDecoding'],
                'receivedMoney': request.data['receivedMoney'],
            }
            for i in range(len(reader.pages)):
                page = reader.pages[i]
                writer.add_page(page)
                writer.update_page_form_field_values(writer.pages[i], fields)
            output_pdf = io.BytesIO()
            writer.write(output_pdf)
            output_pdf.seek(0)
            return FileResponse(output_pdf, as_attachment=True, filename="agreement_filled.pdf")
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
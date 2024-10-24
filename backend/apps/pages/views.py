from django.shortcuts import render


def home(request):
    return render(request, 'pages/home.html')

def createDocuments(request):
    return render(request, 'pages/createDocument.html')

def faq(request):
    return render(request, 'pages/faq.html')

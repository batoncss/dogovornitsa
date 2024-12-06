from django.shortcuts import render


def home(request):
    return render(request, 'pages/home.html')

def faces(request):
    return render(request, 'pages/faces.html')

def makingOrder(request):
    return render(request, 'pages/makingOrder.html')

def orders(request):
    return render(request, 'pages/orders.html')
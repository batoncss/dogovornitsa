from django.shortcuts import render


def home(request):
    return render(request, 'pages/home.html')

def making_order(request):
    return render(request, 'pages/making-order.html')

def orders(request):
    return render(request, 'pages/orders.html')
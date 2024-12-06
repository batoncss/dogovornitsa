from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('faces/', views.faces, name='faces'),
    path('makingOrder/', views.makingOrder, name='makingOrder'),
    path('orders/', views.orders, name='orders'),
]

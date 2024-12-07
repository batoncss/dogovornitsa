from django.urls import path
from  .views import making_order, faces, home, orders


urlpatterns = [
    path('', home, name='home'),
    path('faces/', faces, name='faces'),
    path('making-order/', making_order, name='makingOrder'),
    path('orders/', orders, name='orders'),
]

from django.urls import path
from  .views import making_order, home, orders


urlpatterns = [
    path('', home, name='home'),
    path('making-order/', making_order, name='makingOrder'),
    path('orders/', orders, name='orders'),
]

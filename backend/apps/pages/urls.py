from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('createDocument', views.createDocuments, name='createDocuments'),
    path('faq', views.faq, name='faq'),
]

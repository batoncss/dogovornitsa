from django.urls import path
from . import api

urlpatterns = [
    path('generatingPDF/', api.GeneratingPDF.as_view()),
]
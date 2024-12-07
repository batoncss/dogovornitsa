from django.urls import path
from .views import participants


urlpatterns = [
    path('participants', participants, name='participants'),
]

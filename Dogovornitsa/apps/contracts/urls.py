from django.shortcuts import redirect
from django.urls import path
from .views import participants, participants_delete


urlpatterns = [
    path('participants', participants, name='participants'),
    # todo: replace with detailed page view
    path('participants/<int:id>/', lambda request, id: redirect('home'), name='participants-detailed'),
    path('participants/delete/<int:participant_id>/', participants_delete, name='participants_delete'),
]

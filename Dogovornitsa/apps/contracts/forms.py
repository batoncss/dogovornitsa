from django.forms import ModelForm

from .models import Participant

class ParticipantForm(ModelForm):
    class Meta:
        model = Participant
        fields = [
            'name',
            'legal_address',
            'actual_address',
            'inn',
            'kpp',
            'ogrn',
        ]
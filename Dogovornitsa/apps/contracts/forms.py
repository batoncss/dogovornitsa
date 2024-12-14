from django.forms import TextInput, ModelForm

from .models import Participant

class ParticipantForm(ModelForm):
    class Meta:
        model = Participant
        widgets = {
            'name': TextInput(attrs={'class': 'form-control'}),
        }
        error_messages = {
            'name': {
                'required': "Имя участника договора обязательно"
            }
        }
        fields = [
            'name',
            'legal_address',
            'actual_address',
            'inn',
            'kpp',
            'ogrn',
        ]
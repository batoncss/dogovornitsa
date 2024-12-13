from django.shortcuts import render, redirect, get_object_or_404

from Dogovornitsa.apps.contracts.forms import ParticipantForm
from Dogovornitsa.apps.contracts.models import Participant


def participants_add(request):
    if request.method == 'POST':
        form = ParticipantForm(request.POST)
        if form.is_valid():
            form.save()  # Сохраняем новую запись
            return redirect('participants-add')  # Перезагрузка страницы
    else:
        form = ParticipantForm()
    all_participants = Participant.objects.all()
    return render(request, "pages/contracts/participants-add.html", {"participants": all_participants, 'form': form})

def participants_list(request):
    all_participants = Participant.objects.all()
    return  render(request, "pages/contracts/participants-list.html", {"participants": all_participants})

def participants_delete(request, participant_id):
    participant = get_object_or_404(Participant, id=participant_id)
    participant.delete()
    return redirect('participants-list')  # Перезагрузка страницы
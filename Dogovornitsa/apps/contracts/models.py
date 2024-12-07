from django.db import models

class Participant(models.Model):
    name = models.CharField(max_length=128)
    inn = models.CharField(max_length=30)

    def __str__(self):
        return self.name

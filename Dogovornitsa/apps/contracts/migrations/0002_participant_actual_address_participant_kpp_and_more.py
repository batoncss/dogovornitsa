# Generated by Django 5.1.4 on 2024-12-12 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contracts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='participant',
            name='actual_address',
            field=models.CharField(default=None, max_length=50, null=True, verbose_name='Фактический адрес'),
        ),
        migrations.AddField(
            model_name='participant',
            name='kpp',
            field=models.CharField(default=None, max_length=9, null=True, verbose_name='КПП'),
        ),
        migrations.AddField(
            model_name='participant',
            name='legal_address',
            field=models.CharField(default=None, max_length=50, null=True, verbose_name='Юридический адрес'),
        ),
        migrations.AddField(
            model_name='participant',
            name='ogrn',
            field=models.CharField(default=None, max_length=15, null=True, verbose_name='ОГРН'),
        ),
        migrations.AlterField(
            model_name='participant',
            name='inn',
            field=models.CharField(default=None, max_length=12, null=True, verbose_name='ИНН'),
        ),
        migrations.AlterField(
            model_name='participant',
            name='name',
            field=models.CharField(default=None, max_length=50, null=True, verbose_name='Наименование клиента'),
        ),
    ]

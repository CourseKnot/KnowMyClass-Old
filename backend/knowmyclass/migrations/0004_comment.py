# Generated by Django 4.1.5 on 2023-02-24 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("knowmyclass", "0003_alter_course_description"),
    ]

    operations = [
        migrations.CreateModel(
            name="Comment",
            fields=[
                ("comment_id", models.AutoField(primary_key=True, serialize=False)),
                ("description", models.TextField(null=True)),
            ],
        ),
    ]
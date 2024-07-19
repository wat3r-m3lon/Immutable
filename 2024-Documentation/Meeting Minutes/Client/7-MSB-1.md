# Meeting Minutes
___
**Date:** 03/04/2024 <br>
**Time:** 13:00 <br>
**Location:** Room 4.18B, Cheifly Library <br>
**Attendance (Team):** <br>
&ensp;&ensp; Nuoxi Qin (Spokesperson), Mitchell Barker (Spokesperson), <br>
&ensp;&ensp; Linxi Li, Bohong Sun, Songxuan Li, Andy Chih <br>
**Attendance (Stakeholder):** <br>
&ensp;&ensp; Mat Borowski, Milica Gallardo Petkovich, Quin Robinson  <br>
**Chairperson:** <br>
&ensp;&ensp; Mitchell Barker, Nuoxi Qin <br>
**Arthur:** <br>
&ensp;&ensp; Mitchell Barker <br>

### Agenda
___

1. Documentation Overhaul
2. General status update
3. Change roles and responsibilities
4. Going over deliverable 3 (work package 2) in detail, (structured breakdown)
5. Closing remarks

### Synopsis
___

- Mat will be taking over from Milica when she leaves, He is the project lead at Counter Advisory (similar to Phil)
- Deliverable 2 (NMF) is complete with only a few bugs which will be fixed. Can continue to next deliverable
- Deliverable 3 (Process Uplift) UI flow has been clarified (see General Notes below)
- Deliverable 3 has been broken down into initial tasks (see Action Items below)
- Mitchell will be doing most administration tasks (see Decisions below)

### Feedback
___

- The code for deliverable 2 still needs to be checked off by the client
- Mat agrees with the idea of having one person be responsible for administrative tasks and leaving the coding to everyone else.

### Decisions
___

- The current deadline for deliverable 3 is the 1st of May, will discuss with the client during next meeting to see if that deadline is still feasible.
- Mitchell will be doing most administrative tasks, which includes:
    - Tutorial, client, and team (when Mitchell is present) meeting minutes (Nouxi will do team meeting minutes if Mitchell is not present)
    - The decisions and feedback within those meeting minutes (if present)  
    - Client and Tutorial meeting agendas
    - Risk log (to be completed after documentation overhaul)
    - Revised User Story Map (to be completed after documentation overhaul)
    - Weekly status update on the administrative / general team information (weekly, every Monday by 23:59)
    - Booking rooms for team and client meetings
    - The primary spokesperson for communication with stakeholders on behalf of the team.
- This does not include:
    - Weekly code status updates (which should be done by tuesday at the latest each week)
    - All audit 3 presentation slides (will do some, but will continue to be split evenly)
    - Presenting during audit 3 (will present some sections, but will continue to be split evenly)
    - Poster and Video (these tasks will require more than just me to work on)

### Action Items
___

| <div style="width:300px">Action Item</div> | Responsible Party | Due Date | 
| :----------------------------------------- | :---------------: | :------: |
| Build initial front end of Institution request page | Linxi | 17/04/2024 |
| Build initial front end of Institution 'admin' page | Bohong | 17/04/2024 |
| Create function for getting all the data of a single, existing NFT request to the frontend layer | Songxuan | 17/04/2024 |
| Create function for getting all pending NFT requests that are associated with an institutions email to the frontend layer | Andy | 17/04/2024 |
| Review existing modules of code for automatically sending email to users | Nouxi | 17/04/2024 |
| Report back to client whether the team will need an extension for Deliverable 3 | All Members | 10/04/2024 |
| Inform stakeholders of documentation overhaul and new landing page when initial version is complete | Mitchell | 5/04/2024 |

### General Notes
___

- Need to create what is essentially a duplicate of the user NFT request page for the institution, except the data the user submitted is pre-filled in
- Need to create what is essentially a duplicate of the admin page for each institution, where they can only see NFT requests that have the institutions email
- Some specific notes regarding the process:
    1. Always email the institution, no other forms of communication
    2. Institution will have an admin page, they will only have access to requests linked to their emails
    3. Institutions will be sent to a 'duplicate' of the request page, with all the information the user filled in
    4. The Institution will be able to edit all the fields
    5. Institution cannot mint the request on their own, the user will have to go to their dashboard to mint the approved the request
    6. No checks for changing all meta data
    7. If voided, the user will be notified of the request being denied, and the request will disappear of the database

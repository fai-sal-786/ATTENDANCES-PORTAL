const users = [
    {
      name: 'John Doe',
      fatherName: 'Richard Doe',
      age: 16,
      rollNo: '101',
      class: '10th Grade',
    },
    {
      name: 'Jane Smith',
      fatherName: 'Robert Smith',
      age: 15,
      rollNo: '102',
      class: '9th Grade',
    },
    {
      name: 'Michael Johnson',
      fatherName: 'James Johnson',
      age: 17,
      rollNo: '103',
      class: '11th Grade',
    },
    {
      name: 'Emily Davis',
      fatherName: 'William Davis',
      age: 14,
      rollNo: '104',
      class: '8th Grade',
    },
    {
      name: 'Jessica Brown',
      fatherName: 'Charles Brown',
      age: 16,
      rollNo: '105',
      class: '10th Grade',
    },
    {
      name: 'Daniel Wilson',
      fatherName: 'Thomas Wilson',
      age: 15,
      rollNo: '106',
      class: '9th Grade',
    },
    {
      name: 'Sarah Taylor',
      fatherName: 'Andrew Taylor',
      age: 17,
      rollNo: '107',
      class: '11th Grade',
    },
    {
      name: 'David Lee',
      fatherName: 'George Lee',
      age: 14,
      rollNo: '108',
      class: '8th Grade',
    },
    {
      name: 'Laura Martin',
      fatherName: 'Paul Martin',
      age: 16,
      rollNo: '109',
      class: '10th Grade',
    },
    {
      name: 'Kevin White',
      fatherName: 'Mark White',
      age: 15,
      rollNo: '110',
      class: '9th Grade',
    },
    {
      name: 'Anna Harris',
      fatherName: 'Steven Harris',
      age: 17,
      rollNo: '111',
      class: '11th Grade',
    },
    {
      name: 'Brian Clark',
      fatherName: 'Edward Clark',
      age: 14,
      rollNo: '112',
      class: '8th Grade',
    },
    {
      name: 'Sophia Lewis',
      fatherName: 'Henry Lewis',
      age: 16,
      rollNo: '113',
      class: '10th Grade',
    },
    {
      name: 'Christopher Walker',
      fatherName: 'Frank Walker',
      age: 15,
      rollNo: '114',
      class: '9th Grade',
    },
    {
      name: 'Grace Hall',
      fatherName: 'Peter Hall',
      age: 17,
      rollNo: '115',
      class: '11th Grade',
    },
    {
      name: 'Justin Allen',
      fatherName: 'Patrick Allen',
      age: 14,
      rollNo: '116',
      class: '8th Grade',
    },
    {
      name: 'Olivia Young',
      fatherName: 'Bruce Young',
      age: 16,
      rollNo: '117',
      class: '10th Grade',
    },
    {
      name: 'Nathan Hernandez',
      fatherName: 'Larry Hernandez',
      age: 15,
      rollNo: '118',
      class: '9th Grade',
    },
    {
      name: 'Mia King',
      fatherName: 'Joe King',
      age: 17,
      rollNo: '119',
      class: '11th Grade',
    },
    {
      name: 'Ethan Wright',
      fatherName: 'Stanley Wright',
      age: 14,
      rollNo: '120',
      class: '8th Grade',
    },
    {
      name: 'Ava Lopez',
      fatherName: 'Timothy Lopez',
      age: 16,
      rollNo: '121',
      class: '10th Grade',
    },
    {
      name: 'Jacob Scott',
      fatherName: 'Chris Scott',
      age: 15,
      rollNo: '122',
      class: '9th Grade',
    },
    {
      name: 'Samantha Green',
      fatherName: 'Shawn Green',
      age: 17,
      rollNo: '123',
      class: '11th Grade',
    },
    {
      name: 'Andrew Adams',
      fatherName: 'Jason Adams',
      age: 14,
      rollNo: '124',
      class: '8th Grade',
    },
    {
      name: 'Ella Baker',
      fatherName: 'Ryan Baker',
      age: 16,
      rollNo: '125',
      class: '10th Grade',
    },
  ];
  
  let totalPresent = 0;
  let totalAbsent = 0;
  let totalLeave = 0;
  
  function updateTotals() {
      document.getElementById('total-present').textContent = totalPresent;
      document.getElementById('total-absent').textContent = totalAbsent;
      document.getElementById('total-leave').textContent = totalLeave;
  }
  
  function markAttendance(index, status) {
      const prevStatus = users[index].status;
      users[index].status = `You are marked as ${status}.`;
      updateStudentStatus(index, prevStatus);
  }
  
  function updateStudentStatus(index, prevStatus) {
      const statusMessage = document.getElementById(`status-message-${index}`);
      statusMessage.textContent = users[index].status;
  
      if (prevStatus) {
          if (prevStatus.includes('Present')) totalPresent--;
          if (prevStatus.includes('Absent')) totalAbsent--;
          if (prevStatus.includes('Leave')) totalLeave--;
      }
  
      switch (users[index].status) {
          case 'You are marked as Present.':
              statusMessage.style.color = 'green';
              totalPresent++;
              break;
          case 'You are marked as Absent.':
              statusMessage.style.color = 'red';
              totalAbsent++;
              break;
          case 'You are marked as Leave.':
              statusMessage.style.color = 'blue';
              totalLeave++;
              break;
          default:
              statusMessage.style.color = 'black';
      }
      updateTotals();
  }
  
  function createStudentElements() {
      const studentsContainer = document.querySelector('.students');
      users.forEach((user, index) => {
          const studentDiv = document.createElement('div');
          studentDiv.classList.add('student');
  
          const studentInfo = document.createElement('p');
          studentInfo.classList.add('student-name');
          studentInfo.textContent = `${user.name}, ${user.class} (Roll No: ${user.rollNo})`;
          studentDiv.appendChild(studentInfo);
  
          const fatherInfo = document.createElement('p');
          fatherInfo.textContent = `Father's Name: ${user.fatherName}, Age: ${user.age}`;
          studentDiv.appendChild(fatherInfo);
  
          const buttonsDiv = document.createElement('div');
          buttonsDiv.classList.add('buttons');
  
          const presentButton = document.createElement('button');
          presentButton.textContent = 'Present';
          presentButton.onclick = () => markAttendance(index, 'Present');
          buttonsDiv.appendChild(presentButton);
  
          const absentButton = document.createElement('button');
          absentButton.textContent = 'Absent';
          absentButton.onclick = () => markAttendance(index, 'Absent');
          buttonsDiv.appendChild(absentButton);
  
          const leaveButton = document.createElement('button');
          leaveButton.textContent = 'Leave';
          leaveButton.onclick = () => markAttendance(index, 'Leave');
          buttonsDiv.appendChild(leaveButton);
  
          studentDiv.appendChild(buttonsDiv);
  
          const statusMessage = document.createElement('p');
          statusMessage.classList.add('status-message');
          statusMessage.id = `status-message-${index}`;
          statusMessage.textContent = 'No status yet.';
          studentDiv.appendChild(statusMessage);
  
          studentsContainer.appendChild(studentDiv);
      });
  }
  
  document.addEventListener('DOMContentLoaded', createStudentElements);
  
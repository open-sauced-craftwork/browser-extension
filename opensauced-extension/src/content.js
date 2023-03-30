function checkOpenSaucedUser() {
    const currentTabUrl = window.location.href;
    const username = currentTabUrl.match(/github\.com\/([^\/]*)/)[1];
  
    fetch(`https://api.opensauced.pizza/v1/users/${username}`)
      .then(response => {
        if (response.status === 200) {
          const button = document.createElement('a');
          button.innerText = 'View on OpenSauced';
          button.href = `https://insights.opensauced.pizza/user/${username}`;
          button.target = '_blank';
          button.rel = 'noopener noreferrer';
          button.className = 'btn btn-sm btn-primary';
          button.style.width = 'calc(100%)';
          button.style.backgroundColor = '#2ea44f';
          button.style.marginTop = '8px';
          button.style.marginRight = '0px';
          button.style.marginLeft = '0px';
          button.style.marginBottom = '0px';
          button.style.textAlign = 'center';
          button.style.padding = '5px';
          const container = document.querySelector('.user-profile-bio');
          if (container) {
            const followButton = container.querySelector('.js-profile-editable-area .btn-block');
            if (followButton) {
              followButton.parentElement.insertBefore(button, followButton);
            } else {
              container.appendChild(button);
            }
          } else {
            console.error('Container element not found.');
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  checkOpenSaucedUser();
  
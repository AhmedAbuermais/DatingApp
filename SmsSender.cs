﻿
using EskaCMS.EmailSender.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EskaCMS.EmailSender.Services
{
    public class SmsSender : ISmsSender
    {
        public Task SendSmsAsync(string number, string message)
        {
            // Plug in your SMS service here to send a text message.
            return Task.FromResult(0);
        }
    }
}


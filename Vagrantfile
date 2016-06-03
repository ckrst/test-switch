# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "vinik/ubuntu"

    config.vm.network "forwarded_port", guest: 8080, host: 80

    config.vm.provision "chef_solo" do |chef|
        chef.cookbooks_path = ['chef/cookbooks']
        chef.add_recipe 'php'
        chef.add_recipe 'composer'
    end

end
